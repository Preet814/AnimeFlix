import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3 style={{color:'black',padding:'0rem 1rem'}}>Top 5 Rating</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    background-color: #E4D3f9;
    border-top: 5px solid #48079C;
    padding-right: 5rem;
    padding-left: 6rem;
    padding-top: 2rem;
    .anime{
        display: flex;
        flex-direction: column;
        width: 100px;
        img{
            width: ;
            border-radius: 5px;
            border:  solid #48079C;
        }
        a{
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: .4rem;
            color: ;
            h4{
                font-size: 1.1rem;
            }
        }
    }
`;

export default Sidebar