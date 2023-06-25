import {notFound} from 'next/navigation'
import { MdxComponents } from '../../../components/mdx-components'
import {allDocs} from '../../../.contentlayer/generated'

async function getDocFromParams(slug){
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if(!doc){
    notFound()
  }

  return doc
}


const DocPage = async ({params}) => {
  const doc = await getDocFromParams(params.slug)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
  {">"}<div className="font-medium text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={"scroll-m-20 text-4xl font-bold tracking-tight"}>
            {doc.title}
          </h1>
            <p className="text-lg text-muted-foreground">
              {doc.description}
            </p>
        </div>

        <div className="pb-12 pt-8">
          <MdxComponents code={doc.body.code} />
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