
// ICONS
import searchIcon from "../assets/icons/Search.png";
import Notif from "../assets/icons/Notification.png";
import catProfile from "../assets/kucing.jpeg";
import ArrowLeft from "../assets/icons/ArrowLeftDefault.png";
import ArrowRight from "../assets/icons/ArrowRightActive.png";

const TopBar = () => {

    return(
        <>
            <section id="topBar" className="ml-64 flex items-center justify-between px-20 py-6">
                <div className="flex items-center gap-5">
                    <button className="rounded-full flex items-center justify-center w-14 h-14 bg-custom-secondary">
                        <img src={ArrowLeft} className="w-5 h-5" />
                    </button>
                    <button className="rounded-full flex items-center justify-center w-14 h-14 bg-custom-secondary">
                        <img src={ArrowRight} className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex bg-custom-secondary p-5 px-5 w-full max-w-md h-14 rounded-2xl items-center">
                    <img src={searchIcon} className="w-5 h-5 mr-3" alt="icon search" />
                    <p className="text-font-color2">Type here to search</p>
                </div>

                <div className="flex items-center gap-2">
                    <img src={Notif} className="w-5 h-5 mr-3" />
                    <div className="flex items-center gap-5">
                        <img src={catProfile} className="rounded-full w-14" />
                        <p className="font-medium text-1xl">Natuna</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopBar;