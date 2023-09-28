export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#10171e] overflow-hidden">
      <div className="w-full blur-[2px]">
        <img src="https://i.imgur.com/lkBkPWK.png" alt="forest illustration"/> 
      </div>
      <div className="w-screen h-screen absolute">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-white font-bold text-3xl">Your <span className="text-red-600">Product</span></h1>
              <p className="text-white">Our product is amazing and helpful! (coming soon)</p>
            </div>
            <div className="pt-8">
              <form className="flex flex-col">
                <label className="text-white font-bold">Join our waitlist</label>
                <div className="flex flex-row">
                  <input type="email" placeholder="Email Address" className="ease-in-out hover:scale-105 h-9 p-2 w-64 rounded-lg focus:outline-none outline-none stroke-none"></input>
                  <button className="ml-2 rounded-lg w-14 h-9 text-white font-bold bg-gray-900 ease-in-out hover:scale-105 hover:bg-gray-950">Join</button>  
                </div>
                <label className="text-gray-300 text-[10px] mt-2">Don't worry, we only use this to notify you of release</label>
              </form>
            </div>
          </div>
          <a target="_blank" title="Check out the source code" rel="noopener noreferrer" className="ease-in-out hover:scale-105 absolute bottom-2 left-2 w-8 h-8 opacity-10" href="https://github.com/NuclearPickleTV/React-Waitlist-Template">         
            <img src="./images/git.png" alt="github logo" className=""/>
          </a>
      </div>
    </div>
  )
}
