
const storage = {
    /* localStorage */
    ls: {
        set(key: string, value: any) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get(key: string) {
            const obj = localStorage.getItem(key)
            if (obj) {
                return JSON.parse(obj)
            } else {
                return null
            }
        },
        remove(key: string) {
            localStorage.removeItem(key)
        },
        clear() {
            localStorage.clear()
        }
    },
    /* sessionStorage */
    ss: {
        set(key: string, value: any) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        get(key: string) {
            const obj = sessionStorage.getItem(key)
            if (obj) {
                return JSON.parse(obj)
            } else {
                return null
            }
        },
        remove(key: string) {
            sessionStorage.removeItem(key)
        },
        clear() {
            sessionStorage.clear()
        }
    }
}
export default storage;

  