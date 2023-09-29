import styled from "@emotion/styled";
export default function ImgList() {
    return (
        <Gallary>
            {itemData.map((item) => {
                return (
                    <Pics key={item.id}>
                        <img src={item.img} style={{ width: "100%" }} />
                    </Pics>
                )
            })}
        </Gallary>
    );
}

const itemData = [
    {
        img: '/assets/2.jpg',
        id: 1
    },
    {
        img: '/assets/6.jpg',
        id: 2
    },
    {
        img: '/assets/5.jpg',
        id: 4
    },
    {
        img: '/assets/3.jpg',
        id: 3
    },
 

    {
        img: '/assets/4.jpg',
        id: 11

    },
    

    {
        img: '/assets/5.jpg',
        id: 6
    },
    
    {
        img: '/assets/2.jpg',
        id: 7
    },

    {
        img: '/assets/1.jpg',
        id: 9
    },

    {
        img: '/assets/8.jpg',
        id: 20
    },
];

const Gallary = styled.div`
-webkit-column-count:3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 50%;
  -moz-column-width: 33%;
  column-width: 33;
  padding: 0 12px;
`

const Pics = styled.div`
-webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  margin-bottom: 12px; 
`