type Result = {
   pageid: string,
   title: string,
   extract: string,
   thuimbnail?: {
      source: string,
      width: number,
      height: number,
   }
}

type SearchResult = {
   query?: {
      pages?: Result[],
   }
}