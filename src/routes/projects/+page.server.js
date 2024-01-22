export const ssr = true
import axios from 'axios'

export const load = async () => {
  try {
    const result = await axios('https://api.airtable.com/v0/appnaMxlSCIdW5BFu/tblB4KfPCUT0vJ4bQ', {
      headers: {
        Authorization: `Bearer patxsdodhsqrCOBfA.61524b1ebfc269e0a0d631a3bdb451e7ab048ff9b02fc3f137e2b5eec628403f`
      }
    })
    const records = result?.data?.records;
    return {
      projects: records ?? []
    };
  } catch (error) {
    console.log(error)
    return {
      projects: []
    }
  }
}

//appnaMxlSCIdW5BFu
// tblB4KfPCUT0vJ4bQ
// viw8s9tZcL01a9JGw