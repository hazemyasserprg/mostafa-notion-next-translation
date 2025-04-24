const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-transparent">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 border-4 border-main border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-2 bg-main rounded-full opacity-20 blur-md" />
      </div>
    </div>
  );
};

export default Loader;
