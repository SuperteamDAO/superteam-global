export const ssr = true
import axios from 'axios'

export const load = async () => {
  try {
    const result = await axios('https://api.airtable.com/v0/appnaMxlSCIdW5BFu/tblX8QMihHY6zM9fu', {
      headers: {
        Authorization: `Bearer patxsdodhsqrCOBfA.61524b1ebfc269e0a0d631a3bdb451e7ab048ff9b02fc3f137e2b5eec628403f`
      }
    });

    const data = result?.data?.records ?? [];

    const completedPerks = data.filter((d) => d.fields['Status'] === 'Completed');
    const comingSoonPerks = data.filter((d) => d.fields['Status'] === 'Coming Soon');
    const livePerks = data.filter((d) => d.fields['Status'] === 'Live now');

    const perks = { completedPerks, comingSoonPerks, livePerks };

    return { perks };
  } catch (error) {
    console.log(error)
    return {
      perks: {}
    }
  }
}

//appnaMxlSCIdW5BFu
// tblX8QMihHY6zM9fu
// viw3PC4HMc0vHKDE3