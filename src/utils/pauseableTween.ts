// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { tweened as nativeTweened, type Tweened } from 'svelte/motion'
import { get } from 'svelte/store'

export function tweened(initial, options={}): Tweened<any> & {
	pause: () => Promise<void>,
	reset: () => Promise<void>,
	continue: () => Promise<void>,
	replay: () => Promise<void>,
} {
	const store = nativeTweened(initial, options)
	const set = store.set
	store.lastSet = initial
	
	store.pause = () => {
		const value = get(store)
		return set(value, {duration: 0})
	}
	
	store.reset = () => {
		return set(initial, {duration: 0})
	}
	
	store.continue = () => {
		const value = get(store)
		const percentageCompleted = (value - initial) / (store.lastSet - initial)
		const remaining = options.duration - (options.duration * percentageCompleted)

		return set(store.lastSet, {duration: remaining})
	}
	
	store.replay = async () => {
		await store.reset()
		return set(store.lastSet, options)
	}
	
	store.set = (newValue, options) => {
		store.lastSet = newValue
		return set(newValue, options)
	}
	
	return store
}