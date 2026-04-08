export interface Expert {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const experts: Expert[] = [
  {
    name: "Wojciech Smolarek",
    role: "SEO Strategy",
    description:
      "Specjalista od technicznego SEO i widoczności w Google. Buduje strategie, które przekładają się na realne leady.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGtERSb6_i38gc2jpUG6w0msLfLxgDvRuEuFzmDac-D-42pTExswW-IfMGNz86x_4mjECN7iGIxi4DMnrXXupB4fIvfPvPyXw4q-hRSD1GnParMJCKt2Btr3ywBIaODMZJdDd110rgqePoL9_EJUOmkSFV-Ux-wph_P5Fg9HAxvMY2GKJg-d_3gY3SmFrcHr0e_QMOqPNr-19wWJWHTHO-mY-7k4OqccD7OeT_cOnxvUK0xVtZapzqeY5AILecCs4u8l5TWzpTp8k",
  },
  {
    name: "Piotr Firyn",
    role: "Web Development",
    description:
      "Architekt systemów i deweloper. Tworzy szybkie, skalowalne strony internetowe z naciskiem na wydajność.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7PIrwND8V5Jttzd_qyhhV7OmTrx42uSDo0yxgUGXcsVv28GMuuhkAz-Bs8EW_gIN-aGDsBjA53LMmDs4x5APmLJDA4lC_JrwBYTtmgSKD6GpjAI5Bxa7LJMH_232M8WqAt7ys_X45rW6hZaK37gfbY0UFG3jQMM8haZ48iwe2D7rhyPnbF8U3y9mAdFWq53vg4btCvLyRUYSC-LC8VfNVTqQAk4cOhnG1lkVViWp19TDuvsikYZlst_MFqUFXVeFgsu0VvYioz8Zx",
  },
  {
    name: "Jakub Witkowski",
    role: "UX & Operations",
    description:
      "Łączy kropki między marketingiem a sprzedażą. Dba o to, by ruch na stronie konwertował.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgVNzbl2D_BXCc1WDVe_yzBRVOXR_UMRXT3XHr72YI8mVGo3-NfnkIuZVw6TRQwEgVIJfGAE9FeihyRHnm-Wnfd93m5sHVdc7BLyNVTYMdcKXaGI4VUgLcWrUW9GbTO3DL4D7IcGHXZ_t4cORIiAKLpiur2BwXhvfaJND03qoCncJ_ETd5FVgM9E5TTtJPUjBPjEXIoYnVY3w_blJjAyf5-gsF2DFgcaJjetdvENbbJZTbCwa5GDmo6O5yRD92j-C_ILwG7D_ZMDsc",
  },
];
