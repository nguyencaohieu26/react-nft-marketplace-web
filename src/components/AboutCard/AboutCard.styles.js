import styled from 'styled-components';

export const AboutItem = styled.li`
    padding: 20px;
    cursor: pointer;
    border-radius: 8px;
    background: var(--eerie-black-2);

    .about-card{
        text-align: center;
        position: relative;
        border-radius: 4px;
        padding: 30px 10px 20px;
        border: 1px solid var(--onyx-1);

        &::before
        ,&::after{
            content: "";
            bottom: -2px;
            right: -2px;
            position: absolute;
            border-radius: 10px;
            background: var(--sonic-silver);
            transition: var(--transition);
        }
        &::before{
            width: 3px;
            height: 100px;
        }
        &::after{
            width: 100px;
            height: 3px;
        }
        .card-number{
            top: -15px;
            left: -15px;
            font-size: 24px;
            position: absolute;
            padding: 5px 15px;
            color: var(--onyx-2);
            font-weight: var(--fw-700);
            background: var(--eerie-black-1);
            border-top-left-radius: 18px;
            border: 14px solid var(--eerie-black-2);
        }
        .card-icon{
            width: max-content;
            margin-inline: auto;
            margin-bottom: 20px;
        }
        .about-card-title{
            margin-bottom: 20px;
            transition: var(--transition);
        }
        .about-card-text{
           font-size:var(--fs-7);
           line-height: 1.5;
        }
    }
    &:hover .about-card::before,
    &:hover .about-card::after {
        background: var(--golden-puppy);
    }
    &:hover .about-card-title{
        color: var(--golden-puppy);
    }
`