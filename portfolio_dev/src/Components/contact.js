import React from "react";

function contact() {
  let url =
    "https://mail.google.com/mail/?view=cm&fs=1&to=johnwick4learning@gmail.com&su=Contact&body=BODY&bcc=youremail@gmail.com";
  return (
    <div
      id="contact"
      className=" bg-transparent h-screen justify-center bg-black"
    >
      <div className="md:jusitfy-center w-full md:h-auto h-auto font-[Branch] text-white grid text-center bg-transparent m-5 space-y-10">
        <div className="w-full md:mt-10 md:text-6xl text-4xl tracking-widest md:text-center bg-transparent pt-20 md:p-3">
          <h1>Contact</h1>
        </div>
        <div className="w-auto mt-12 md:text-xl text-lg md:justify-center justify-center text-center bg-transparent space-y-10">
          <p className="text-sm">~ping me on following contact~</p>
          <div className="hover:cursor-pointer rounded-lg max-w-md md:text-center md:justify-start text-start h-auto font-[Branch] tracking-wider text-xl transition ease-in-out hover:scale-120 hover:bg-slate-300 hover:text-slate-900 p-3 mx-5">
            <h1>
              Mail id: 
              <span>
                <a href={url}> johnwick4learning@gmail.com</a>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
