(function () {
  const modal = document.querySelector("[data-hp-booking-modal]");
  const openers = document.querySelectorAll("[data-hp-booking-open]");
  const closers = document.querySelectorAll("[data-hp-booking-close]");
  const form = document.querySelector(".hp-booking-form");
  const success = document.querySelector(".hp-booking-form__success");

  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  openers.forEach((button) => button.addEventListener("click", openModal));
  closers.forEach((button) => button.addEventListener("click", closeModal));

  document.addEventListener(
    "click",
    function (event) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link) return;

      try {
        const url = new URL(link.href);
        if (url.origin === window.location.origin && url.pathname.replace(/\/$/, "") === "/dat-lich") {
          event.preventDefault();
          openModal();
        }
      } catch (error) {
        return;
      }
    },
    true,
  );

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeModal();
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (success) success.hidden = false;
    });
  }
})();
