export const ssr = true
import axios from 'axios'

export const load = async () => {
    try {
        const result = await axios('https://api.airtable.com/v0/appnaMxlSCIdW5BFu/tbl9jOEeaoE6YH4oR', {
            headers: {
                Authorization: `Bearer patxsdodhsqrCOBfA.61524b1ebfc269e0a0d631a3bdb451e7ab048ff9b02fc3f137e2b5eec628403f`
            }
        })

        return {
            events: result?.data?.records ?? []
        };
    } catch (error) {
        console.log(error)
        return {
            events: []
        }
    }
}