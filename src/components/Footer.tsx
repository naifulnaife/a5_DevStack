import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
   <div className="shadow-2xl border-t border-gray-200">
     <div className="container mx-auto px-4 py-8 ">

    <div className="flex flex-col lg:flex-row sm:flex-row justify-between gap-8">
        <div className="max-w-sm">
            <img src={Logo} alt="Dev Stack" className="w-32" />

           
            <p className="mt-3 text-xs leading-5 text-gray-400 sm:text-sm">
                Curated tools, technologies, and resources for developers
                building modern software.
            </p>
           
            <div className="mt-4 flex gap-4 text-xs sm:text-sm">
                <a  className="text-gray-600 transition hover:text-purple-500" >  GitHub </a>
                <a className="text-gray-600 transition hover:text-purple-500" >Twitter </a>
                <a className="text-gray-600 transition hover:text-purple-500"  >  LinkedIn </a>

            </div>
        </div>

        <div className="flex  shrink-0 gap-8 sm:gap-12 md:gap-16">

            <div> 
                <h3 className="text-xs font-semibold uppercase sm:text-sm"> Product</h3>
                
              <ul className="mt-3 space-y-2 text-xs text-gray-400 sm:text-sm">
                    <li><a  className="hover:text-purple-500"> Home</a> </li>
                    <li><a  className="hover:text-purple-500"> Technologies </a></li>
                    <li><a  className="hover:text-purple-500"> Projects </a> </li>
              </ul>
            </div>



            <div>
               <h3 className="text-xs font-semibold uppercase sm:text-sm">Company</h3>

                <ul className="mt-3 space-y-2 text-xs text-gray-400 sm:text-sm">
                    <li> <a  className="hover:text-purple-500"> About </a>  </li>
                    <li> <a  className="hover:text-purple-500"> Contact</a></li>
                    <li><a  className="hover:text-purple-500">  Careers </a></li>

                </ul>
            </div>
           
            <div>
                <h3 className="text-xs font-semibold uppercase sm:text-sm">  Legal</h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-400 sm:text-sm">
                    <li><a  className="hover:text-purple-500"> Privacy Policy</a></li>
                    <li> <a  className="hover:text-purple-500"> Terms of Service </a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="my-6 border-t border-gray-200"></div>

    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400 sm:text-sm">
        <p> © 2026 Dev Stack. All rights reserved. </p>
        <div className="flex gap-5">
            <a  className="hover:text-purple-500">Privacy</a>
            <a  className="hover:text-purple-500"> Terms</a>
        </div>
    </div>
</div>
   </div>
    );
};

export default Footer;