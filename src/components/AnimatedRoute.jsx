import { useRoute } from 'wouter'
import { Transition } from 'react-transition-group'
import { useRef, Fragment } from 'react'
import { defaultStyles, transitionStyles, duration } from '../config/consts'

export const AnimatedRoute = ({ path, children }) => {
    const [match] = useRoute(path)
    const nodeRef = useRef(null)

    return (
        <Transition nodeRef={nodeRef} in={match} timeout={duration}>
            {
                state => (
                    <div ref={nodeRef} style={{
                        ...defaultStyles, ...transitionStyles[state]
                    }}>
                        {children}
                    </div>
                )
            }
        </Transition>
    )
}