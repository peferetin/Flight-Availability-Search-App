import { useState } from 'react'
import * as React from "react";


function App() {

  return (
    <>
      <div className="flex flex-col justify-center bg-white">
        <div className="pl-20 w-full max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-8xl leading-[100.8px] text-violet-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <div className="shrink-0 self-end bg-zinc-300 h-[22px] w-[204px]" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bba8ef947d98dff11960256cd6d05b9c82d1b7b9bcb8de53122c06e4c0cc89e?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                  className="mt-24 max-w-full aspect-[3.45] w-[362px] max-md:mt-10"
                />
                <div className="mt-48 font-extrabold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Flight booking
                </div>
                <div className="mt-2 max-md:max-w-full max-md:text-4xl">
                  Template
                </div>
                <div className="mt-36 text-4xl max-md:mt-10 max-md:max-w-full">
                  Build with Tini Design System
                </div>
                <div className="mt-16 text-3xl leading-10 max-md:mt-10 max-md:max-w-full">
                  v1.0.0
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-5">
                      <div className="flex flex-col justify-center px-3.5 pb-3.5 bg-white rounded-[32px] max-md:pr-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/26eff62d21b4f68a9590b35166b32eb363f28b64308a14df77b6ca9676217982?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                          className="w-full aspect-[0.61]"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-3.5 pt-3.5 mt-10 bg-white rounded-[32px] max-md:pr-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a8c4220c44db20da592e4209912e5774db052117e4e8069799794851dc73eab?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                          className="w-full aspect-[0.71]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow justify-center items-start pt-20 shadow-2xl min-h-[960px] rounded-[32px] max-md:mt-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16eef6f2de8da678acf5565c5161e1ce7d83e59d967883fa2e5dc42939c0d6be?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="flex relative flex-col justify-center px-3.5 pt-3.5 w-80 max-w-full bg-white mt-[758px] rounded-[32px] max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0653400441ca33393745af693efa1ae8c49b2b58a71d01f9c52dc945309ef885?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                          className="w-full aspect-[2.7]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default App
