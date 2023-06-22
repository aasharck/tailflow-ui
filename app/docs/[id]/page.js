import React from 'react'

const DocPage = () => {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
  {">"}<div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h1 className={"scroll-m-20 text-4xl font-bold tracking-tight"}>
            Introduction
          </h1>
            <p className="text-lg text-muted-foreground">
              Something if you want
            </p>
        </div>
        
        
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
          Table of contents
        </div>
      </div>
    </main>
  )
}

export default DocPage