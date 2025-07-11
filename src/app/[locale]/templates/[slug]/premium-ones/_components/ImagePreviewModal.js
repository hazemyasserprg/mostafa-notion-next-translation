import { Fragment, useEffect } from "react";

const { Transition, Dialog } = require("@headlessui/react");
const { X } = require("lucide-react");
const { default: Image } = require("next/image");

export default function ImagePreviewModal({ isOpen, onClose, imageSrc, alt }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal Content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="
                  relative w-full max-w-5xl max-h-[90vh] overflow-hidden
                  rounded-3xl bg-[#181818] shadow-2xl
                "
              >
                <button
                  onClick={onClose}
                  className="
                    absolute top-3 right-3 z-10 text-white hover:text-neutral-300
                    p-2 rounded-full bg-neutral-700/50 hover:bg-neutral-600/70
                  "
                  aria-label="Close preview"
                >
                  <X className="w-6 h-6" />
                </button>
                {imageSrc && (
                  <div className="relative w-full h-[70vh] sm:h-[80vh]">
                    <Image
                      src={imageSrc}
                      alt={alt || "Preview"}
                      fill
                      className="object-contain rounded-3xl"
                      priority
                      sizes="100vw"
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
