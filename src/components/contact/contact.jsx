import { BiMessageSquareDots, BiUserPin, BiConversation } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";
function Contact() {
  return (
    <>
      <section className="mb-6">
        <div className="flex font-extrabold">
          <BiMessageSquareDots size="2rem" color="#218BD7" />

          <h1 className="text-2xl ml-1">Conóceme</h1>
        </div>

        <div className="flex place-content-between bg-darkgrey pl-2 pr-3 py-[9px] rounded-md my-3 items-center">
          <div className="flex gap-2 items-center">
            <BiUserPin size="1.6rem" />
            <h1>Más sobre Franma</h1>
          </div>
          <div>
            <BsArrowUpRightCircle size="1.8rem" color="#218BD7" />
          </div>
        </div>

        <div className="flex place-content-between bg-darkgrey pl-2 pr-3 py-[9px] rounded-md my-3 items-center">
          <div className="flex gap-2 items-center">
            <BiConversation size="1.6rem" />
            <h1>Hablemmos!</h1>
          </div>
          <div>
            <BsArrowUpRightCircle size="1.8rem" color="#218BD7" />
          </div>
        </div>

        <div className="flex place-content-between bg-darkgrey pl-2 pr-3 py-[9px] rounded-md my-3 items-center">
          <div className="flex gap-2 items-center">
            <BiConversation size="1.6rem" className="text-grey" />
            <h1 className="text-softgrey">Proximamente...</h1>
          </div>
          <div>
            <BsArrowUpRightCircle size="1.8rem" className="text-grey" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
