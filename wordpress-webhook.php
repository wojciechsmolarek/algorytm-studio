<?php
/**
 * Vercel Deploy Hook dla WordPress
 *
 * Automatyczna przebudowa strony na Vercel przy zmianach w WordPress.
 * Obsługuje: publikację, aktualizację, usunięcie wpisu,
 * zmiany danych autora, kategorii, tagów oraz pól ACF.
 *
 * INSTRUKCJA:
 * 1. W Vercel: Settings → Git → Deploy Hooks → utwórz hook "WordPress Blog"
 * 2. Skopiuj URL hooka (np. https://api.vercel.com/v1/integrations/deploy/xxx)
 * 3. Ustaw URL w wp-config.php (zalecane, przed /* That's all, stop editing! */):
 *    define('VERCEL_DEPLOY_HOOK', 'https://api.vercel.com/v1/integrations/deploy/xxx');
 * 4. Dodaj ten kod do functions.php motywu potomnego lub przez wtyczkę "Code Snippets"
 */

/**
 * Pobierz URL hooka i wyślij żądanie do Vercel.
 */
function vercel_trigger_deploy() {
    $deploy_hook = defined('VERCEL_DEPLOY_HOOK') ? VERCEL_DEPLOY_HOOK : '';

    if (empty($deploy_hook) || $deploy_hook === 'TUTAJ_WKLEJ_URL_Z_VERCEL') {
        error_log('Vercel Deploy Hook: URL nie jest skonfigurowany. Ustaw VERCEL_DEPLOY_HOOK w wp-config.php.');
        return;
    }

    wp_remote_post($deploy_hook, [
        'method'   => 'POST',
        'timeout'  => 5,
        'blocking' => false,
    ]);
}

/* ============================================================
 * 1. POSTY — publikacja, aktualizacja, zmiana statusu
 * ============================================================ */
add_action('transition_post_status', function ($new_status, $old_status, $post) {
    if ($post->post_type !== 'post') {
        return;
    }
    // Trigger przy każdej zmianie statusu (publish → draft, draft → publish, itp.)
    vercel_trigger_deploy();
}, 10, 3);

/* ============================================================
 * 2. POSTY — aktualizacja (save_post, też przy edycji treści)
 * ============================================================ */
add_action('save_post_post', function ($post_id, $post, $update) {
    // Nie triggeruj przy autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    vercel_trigger_deploy();
}, 10, 3);

/* ============================================================
 * 3. POSTY — usunięcie (kosz + trwałe usunięcie)
 * ============================================================ */
add_action('trashed_post', function ($post_id) {
    $post = get_post($post_id);
    if ($post && $post->post_type === 'post') {
        vercel_trigger_deploy();
    }
});

add_action('before_delete_post', function ($post_id) {
    $post = get_post($post_id);
    if ($post && $post->post_type === 'post') {
        vercel_trigger_deploy();
    }
});

/* ============================================================
 * 4. AUTOR — aktualizacja profilu użytkownika
 * ============================================================ */
add_action('profile_update', function ($user_id, $old_user_data) {
    vercel_trigger_deploy();
}, 10, 2);

// Usunięcie użytkownia (autor może mieć przypisane posty)
add_action('deleted_user', function ($user_id) {
    vercel_trigger_deploy();
});

/* ============================================================
 * 5. KATEGORIE — dodanie, edycja, usunięcie
 * ============================================================ */
add_action('created_category', 'vercel_trigger_deploy');
add_action('edited_category', 'vercel_trigger_deploy');
add_action('delete_category', 'vercel_trigger_deploy');

/* ============================================================
 * 6. TAGI — dodanie, edycja, usunięcie
 * ============================================================ */
add_action('created_post_tag', 'vercel_trigger_deploy');
add_action('edited_post_tag', 'vercel_trigger_deploy');
add_action('delete_post_tag', 'vercel_trigger_deploy');

/* ============================================================
 * 7. ACF — zapis pól (dane autora: rola, ekspertyza, cytat, zdjęcie)
 *    Triggeruje przy zapisie jakiegokolwiek pola ACF.
 * ============================================================ */
add_action('acf/save_post', function ($post_id) {
    // $post_id może być ID wpisu, ID użytkownika (user_123) lub ID terminu
    vercel_trigger_deploy();
}, 20);

/* ============================================================
 * 8. PRZYPISANIE/usunięcie kategorii/tagu z wpisu
 *    (edited_terms nie łapie tego, gdy tylko zmieniają się relacje)
 * ============================================================ */
add_action('set_object_terms', function ($object_id, $terms, $tt_ids, $taxonomy, $append, $old_tt_ids) {
    $post = get_post($object_id);
    if ($post && $post->post_type === 'post') {
        vercel_trigger_deploy();
    }
}, 10, 6);
