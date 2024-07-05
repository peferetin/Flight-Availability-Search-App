<html>
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
        <link
            rel="stylesheet"
            as="style"
            onload="this.rel='stylesheet'"
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
        />

        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    </head>
    <body>
        <div class="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
            <div class="flex items-center bg-slate-50 p-4 pb-2 justify-between">
                <div class="text-[#0d141c] flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                    </svg>
                </div>
                <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">SFO to LAX</h2>
            </div>
            <div class="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div class="flex flex-col justify-center">
                    <p class="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Alaska Airlines 1933</p>
                    <p class="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">Economy | Airbus A320-100/200</p>
                </div>
                <div class="shrink-0"><p class="text-[#49739c] text-sm font-normal leading-normal">Fri, Jun 24 9:30 AM - 11:45 AM</p></div>
            </div>
            <div class="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div class="flex flex-col justify-center">
                    <p class="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Alaska Airlines 340</p>
                    <p class="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">Economy | Airbus A320-200</p>
                </div>
                <div class="shrink-0"><p class="text-[#49739c] text-sm font-normal leading-normal">Sun, Jun 26 11:30 AM - 1:45 PM</p></div>
            </div>
            <h2 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Total: $234.00</h2>
            <div class="flex px-4 py-3">
                <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#0d80f2] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]"
                >
                    <span class="truncate">Choose this fare</span>
                </button>
            </div>
            <p class="text-[#49739c] text-sm font-normal leading-normal pb-3 pt-1 px-4">Prices are in USD and include taxes and fees.</p>
            <div class="h-5 bg-slate-50"></div>
        </div>
    </body>
</html>
