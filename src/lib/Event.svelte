<script>
    import { format } from "date-fns"
    export let event;
</script>

<div class="min-w-[400px] h-[300px] max-w-[537px] p-6 rounded-xl bg-slate-800 flex flex-col justify-between items-stretch">
    <div class="flex flex-col">
        <p class="text-white font-secondary text-[26px] font-bold">
            {event.fields.Title}
        </p>
    </div>
    <div class="font-secondary flex justify-between text-white text-base">
        <div class="w-fit py-2 px-3 text-center font-bold bg-black rounded-full">
            {format(new Date(event.fields.Date), "dd.M.yyyy")}
        </div>
        <div class="w-fit py-2 px-3 text-center font-bold bg-black rounded-full">
            {event.fields.Geo[0]}
        </div>
    </div>
</div>