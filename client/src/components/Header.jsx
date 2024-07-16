import React from "react";

function Header() {
    return (
        <header className="flex gap-5 justify-between px-4 pt-4 pb-2 text-lg font-bold leading-6 text-center whitespace-nowrap bg-slate-50 text-neutral-900">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88feb2c229d3e6af9aa39c02c41c6169cd93425c428e5bb3e810ada8adadb6b1?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                className="shrink-0 self-start w-6 aspect-square"
                alt=""
            />
            <h1>Flights</h1>
        </header>
    );
}

export default Header;

// import React from 'react';

// function Header() {
//     return (
//         <header className="flex gap-5 justify-between px-4 pt-4 pb-2 text-lg font-bold leading-6 text-center whitespace-nowrap bg-slate-50 text-neutral-900">
//             <img loading="lazy" src="http://b.io/ext_9-" className="shrink-0 self-start w-6 aspect-square" alt="" />
//             <h1>Flights</h1>
//         </header>
//     );
// }

// export default Header;