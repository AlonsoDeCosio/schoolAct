import React from 'react'
import Rank from './Rank/Rank'

const ranks = (props) => props.top5.map((rank, index) => {
    return <Rank
        key={rank.id}
        name={rank.name}
        comment={rank.comment} />
});

export default ranks;