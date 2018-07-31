import * as DCL from 'metaverse-api'


// This is an interface, you can use it to enforce the types of your state
export interface IState {
    isDoorClosed: boolean
}

export default class HouseScene extends DCL.ScriptableScene<any, IState> {
    // This is your initial state and it respects the given IState interface
    state = {
        isDoorClosed: false
    }

    sceneDidMount() {
        this.eventSubscriber.on('door_click', () => {
            // setState() will update the state and trigger an update, causing the scene to rerender
            this.setState({isDoorClosed: !this.state.isDoorClosed})
        })
    }

    async render() {


        return (
            <scene >
                <entity position={{ x: 5, y: 0, z: 15 }} rotation={{ x: 5, y: 0, z: 0 }}>

                </entity>
            </scene>
        )
    }
}
