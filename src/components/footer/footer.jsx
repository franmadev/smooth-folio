import logoFranma from "../../assets/icons/logo/logo_blue.png";
function Footer() {
  return (
    <>
      <section className="bg-grey">
        <div className="mx-4">
          <div></div>
          <div className="place-content-center flex py-6">
            <div className="ml-[-13px]">
              <img
                src={logoFranma}
                alt=""
                className="w-32 place-content-center"
              />
              <h3 className="text-center py-2">franma.dev - 2022</h3>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Footer;
