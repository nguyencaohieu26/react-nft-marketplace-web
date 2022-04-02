import styled from 'styled-components';

export const TopSellerItem = styled.li`
    background: var(--eerie-black-2);
    padding: 10px;
    border-radius: 8px;
    .top-seller-card{
        gap: 20px;
        display: flex;
        padding: 13px;
        position: relative;
        border-radius: 4px;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid var(--onyx-2);
        
        &::before,
        &::after{
            content: "";
            bottom: -1px;
            right: -1px;
            position: absolute;
            transition: var(--transition);
            background: var(--sonic-silver);
        }

        &::before{
            width: 2px;
            height: 37px;
        }

        &::after{
            width: 37px;
            height: 2px;
        }

        &:hover::before,
        &:hover::after{
            background: var(--golden-puppy);
        }

        .card-number{
            top: -8px;
            right: -8px;
            padding: 5px 10px;
            position: absolute;
            color: var(--onyx-2);
            font-size: var(--fs-10);
            font-style: var(--fw-700);
            background: var(--eerie-black-1);
            border-top-right-radius: 10px;
            border: 7px solid var(--eerie-black-2);
        }
        .card-avatar{
            position: relative;
            border-radius: 50% ;
            background: var(--black);
        }

        .avatar-badge{
            right: 0;
            bottom: 5px;
            height: 14px;
            width: 14px;
            display: flex;
            font-size: 12px;
            position: absolute;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            background: var(--golden-puppy);
        }
        .card-title{
            color: var(--quick-silver);
            transition: var(--transition);
        }
        .card-content{
            data{
                color: var(--quick-silver);
                font-size: var(--fs-10);
            }
        }
        &:hover .card-title{
            color: var(--golden-puppy);
        }
    }
`