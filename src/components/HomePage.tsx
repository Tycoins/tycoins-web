import TycoinsWebLogo from "../images/tycoins-web_logo.png"
import TycoinsWebBuilding from "../images/tycoins-apartment_building.gif"

export const HomePage = () => {

    return (
        <div className="relative mt-[36px]">
            <div className="w-full flex justify-center">
                <img src={TycoinsWebLogo} className="lg:w-[669px] w-[320px]" alt="tycoin_web" />
            </div>
            <div className="w-full flex justify-center">
                <img src={TycoinsWebBuilding} className="lg:w-[386px] w-[358px]" alt="tycoin_web" />
            </div>
        </div>
    )
}