export default function ({store, redirect}) {
    if (store.state.token) {
        return redirect('/Page/0')
    }
}