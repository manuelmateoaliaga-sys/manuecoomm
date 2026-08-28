/* =========================================================
   MANU ECOOM — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CARRITO
    ====================================================== */

    let cart = JSON.parse(localStorage.getItem("manuecoom_cart")) || [];

    const cartCount = document.getElementById("cartCount");

    function updateCartCount() {

        if (!cartCount) return;

        const total = cart.reduce((total, product) => {
            return total + Number(product.quantity || 1);
        }, 0);

        cartCount.textContent = total;
    }


    function saveCart() {

        localStorage.setItem(
            "manuecoom_cart",
            JSON.stringify(cart)
        );

        updateCartCount();
    }


    /* =====================================================
       AÑADIR PRODUCTOS
    ====================================================== */

    const addButtons = document.querySelectorAll(".add-product");

    addButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const productName =
                button.dataset.product;

            const productPrice =
                Number(button.dataset.price);

            const existingProduct = cart.find(
                product => product.name === productName
            );


            if (existingProduct) {

                existingProduct.quantity += 1;

            } else {

                cart.push({

                    id:
                        Date.now() +
                        Math.random()
                            .toString(36)
                            .substring(2),

                    name: productName,

                    price: productPrice,

                    quantity: 1

                });

            }


            saveCart();


            /* Animación del botón */

            const originalText =
                button.textContent;

            button.textContent =
                "✓ Añadido";

            button.classList.add("added");


            setTimeout(() => {

                button.textContent =
                    originalText;

                button.classList.remove("added");

            }, 1200);

        });

    });


    /* =====================================================
       INICIALIZAR CONTADOR
    ====================================================== */

    updateCartCount();


    /* =====================================================
       SCROLL SUAVE
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       ANIMACIONES AL HACER SCROLL
    ====================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".category-card, .product-card, .supplier-card"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach((element) => {

        element.classList.add(
            "scroll-animation"
        );

        observer.observe(element);

    });


    /* =====================================================
       PREVENIR DOBLE CLIC EN BOTONES
    ====================================================== */

    addButtons.forEach((button) => {

        button.addEventListener(
            "dblclick",
            (event) => {

                event.preventDefault();

            }
        );

    });


    /* =====================================================
       MENSAJE DE BIENVENIDA EN CONSOLA
    ====================================================== */

    console.log(
        "%cMANU ECOOM",
        "font-size: 24px; font-weight: 900;"
    );

    console.log(
        "Plataforma iniciada correctamente."
    );

});