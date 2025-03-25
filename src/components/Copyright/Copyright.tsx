

const Copyright: React.FC = () => {
    return (
      <div className="w-full bg-neutral-950 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} <span className="font-roboto font-bold ">João Pedro Ferreira França</span>. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default Copyright;