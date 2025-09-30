import { useEffect } from "react";
import { X } from "lucide-react"; // Assuming you use lucide-react for icons

// This is a complete, self-contained component to replace your Calendly integration.
// It creates a modal popup to display the Google Calendar appointment page.

interface GoogleCalendarSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GoogleCalendarScheduler({
  isOpen,
  onClose,
}: GoogleCalendarSchedulerProps) {
  // IMPORTANT: Replace this placeholder with the actual booking page link you created in Google Calendar.
  const calendarUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2GnP37dznaMlHrxXPkkDyrbhuJqd5j9dzZPqlqQS9zYRB8guO4FfDGh9E63-F9W_JzZv8AoyvF";

  // Effect to handle closing the modal with the 'Escape' key
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Effect to prevent background scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close modal when clicking outside the modal content
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const modalContent = document.getElementById(
        "google-calendar-modal-content"
      );
      if (modalContent && !modalContent.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm mt-6"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        id="google-calendar-modal-content"
        className="relative bg-white w-11/12 max-w-4xl h-5/6 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 id="modal-title" className="text-lg font-semibold text-gray-800">
            Book Your Appointment
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 rounded-full hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Iframe for Google Calendar */}
        <div className="flex-grow w-full h-full">
          <iframe
            src={calendarUrl}
            className="w-full h-full border-0"
            title="Google Calendar Appointments"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
