// ======================================
// IPL TICKET BOOKING - JAVASCRIPT
// ======================================


// 1. REUSABLE TOAST NOTIFICATION FUNCTION

let toastTimer;

function showToast(message, duration = 3000) {

    let toast = document.getElementById("toast");

    // Create toast element if it doesn't exist
    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";
        toast.className = "toast-notification";

        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");

        document.body.appendChild(toast);
    }

    // Display notification message
    toast.textContent = message;

    toast.classList.add("show");

    // Clear previous timer
    clearTimeout(toastTimer);

    // Hide notification after duration
    toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, duration);
}


// Make function reusable from other JavaScript code
window.showToast = showToast;


// 2. SMOOTH SCROLLING TO BOOKING FORM

document.addEventListener("DOMContentLoaded", function () {

    const bookingLinks = document.querySelectorAll('a[href="#booking"]');

    bookingLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const bookingForm =
                document.querySelector("#booking, .booking-form");

            if (bookingForm) {

                event.preventDefault();

                // Smoothly scroll to booking form
                bookingForm.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

                // Display toast notification
                showToast("Redirecting to Ticket Booking Form!");

            }

        });

    });


    // 3. HANDLE LINKS FROM OTHER HTML PAGES

    if (window.location.hash === "#booking") {

        const bookingForm =
            document.querySelector("#booking, .booking-form");

        if (bookingForm) {

            setTimeout(function () {

                bookingForm.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

                showToast("Welcome! Book your IPL tickets here.");

            }, 200);

        }

    }


    // 4. BOOKING FORM SUBMISSION NOTIFICATION

    const forms = document.querySelectorAll(
        "#booking form, .booking-form form"
    );

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            // Prevent page reload
            event.preventDefault();

            showToast(
                "Details validated! This demo does not save bookings."
            );

        });

    });

});