function CheckoutButton({ checkoutLink, checkoutText }) {
  return (
    <a
      href={checkoutLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block overflow-hidden px-6 py-3 font-medium text-black bg-white rounded-full group shadow-lg hover:shadow-gray-300/50 hover:scale-105 transition-all duration-500 ease-in-out`}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-main transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
      <span className="relative block text-lg transform transition-all duration-300 ease-in-out group-hover:text-white">
        {checkoutText}
      </span>
    </a>
  );
}

export default CheckoutButton;
