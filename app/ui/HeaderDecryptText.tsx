"use client";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

function HeaderDecryptText() {
  function ScrambleOnHover(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    if (!element.dataset.originalText) {
      element.dataset.originalText = element.textContent ?? "";
    }
    const originalText = element.dataset.originalText;

    gsap.to(element, {
      duration: 0.8,
      scrambleText: {
        text: originalText,
        chars: "ABC23l4234",
        speed: 1,
        tweenLength: false,
      },
    });
  }
  return (
    <>
      {" "}
      <span
        onMouseOver={(e) => ScrambleOnHover(e.currentTarget.id)}
        id="header-about"
      >
        About
      </span>
      <span
        onMouseOver={(e) => ScrambleOnHover(e.currentTarget.id)}
        id="header-projects"
      >
        Projects
      </span>
      <span
        onMouseOver={(e) => ScrambleOnHover(e.currentTarget.id)}
        id="header-strenghts"
      >
        Strenghts
      </span>
      <span
        onMouseOver={(e) => ScrambleOnHover(e.currentTarget.id)}
        id="header-experiences"
      >
        Experiences
      </span>
      <span
        onMouseOver={(e) => ScrambleOnHover(e.currentTarget.id)}
        id="header-contacts"
      >
        Contact
      </span>
    </>
  );
}

export default HeaderDecryptText;
