import { useState } from 'react'
import Button from '@/components/button'
import Image from 'next/image'
import styles from './index.module.scss'
import '@/components/index.global.scss'

function ColumnSingle({ content }: any) {
    const { url, singer, lyricist, composer } = content;
    return (
        <div className={styles.columnSingle}>
            <a className={styles.shroud}>
                <div className={styles.touch}></div>
                <Image src={url} alt="曲谱封面" className={styles.zoom} width={285} height={250} priority />
            </a>
            <p className={styles.content}>{singer}</p>
            <p className={`${styles.content} ${styles.add}`}>{lyricist}</p>
            <p className={`${styles.content} ${styles.add}`}>{composer}</p>
        </div>
    )
}

function RowBlock(props: any) {
    const { contents } = props;
    return (
        <div className={styles.rowBlock}>
            {contents.map((content: any) => 
                <ColumnSingle key={content.id} content={content} />
            )}
        </div>
    )
}

function RowSingle({ content }: any) {
    const { url, name, singer, lyricist, composer } = content;
    return (
        content && 
        (
            <div className={styles.rowSingle}>
                <div className={styles.cover}>
                    {url && 
                        <Image src={url} alt="曲谱" width={250} height={250} priority />
                    }
                </div>
                <div className={styles.content}>
                    <h1 className={styles.name}>{ name }</h1>
                    <h5>演唱: { singer }</h5>
                    <h5>作词: { lyricist }</h5>
                    <h5>作曲: { composer }</h5>
                    <h5>类型: </h5>
                    <h5>发布者: </h5>
                    <div className={styles.button}>
                        <Button>查看</Button>
                        <Button>修改</Button>
                        <Button>删除</Button>
                    </div>
                </div>
            </div>
        )   
    )
}

function ColumnBlock(props: any) {
    const { contents } = props;
    return (
        <div className={styles.columnBlock}>
            {contents.map((content: any) => 
                <RowSingle key={content.id} content={content} />
            )}
        </div>
    )
}

function SearchBlock(blockProps: React.HTMLAttributes<HTMLElement>) {
    const {children, ...props} = blockProps;
    const clsName = props.className ? 
    `${styles.searchBlock} ${props.className}` : 
    `${styles.searchBlock}`;
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    }
    let contentClsName = open ? `${styles.content} ${styles.contentExpanded}` : `${styles.content}`;
    let iconClsName = open ? `${styles.icon_arrow} ${styles.icon_arrow_rotate}` : `${styles.icon_arrow}`;
    return (
        <div className={clsName}>
            <div className={contentClsName}>
                {children}
            </div>
            <div className={styles.icon}>
            <svg className={iconClsName} onClick={handleClick}>
                <symbol id="icon_arrow" viewBox="0 0 24 24">
                <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path>
                </symbol>
                <use xlinkHref="#icon_arrow" fill="#5f6368"></use>
            </svg>
            </div>
        </div>
    )
}

function ProfileBlock() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <Image src="/image/avatar1.jpg" alt="头像" width={120} height={120} priority />
                <span className={styles.profileName}>用户名称</span>
            </div>
            <div className={styles.selectBlock1}>
                <span className={styles.selectHeader1}>我的通知</span>
            </div>
        </div>
    )
}

function CommentSingle() {
    return (
        <div className={styles.commentSingle}>
            <div className={styles.commentUser}>
                <div className={styles.commentUserAvatar}>
                    <Image src="/image/avatar1.jpg" alt="头像" width={40} height={40} priority />
                </div>
                <div className={styles.commentUserInfo}>
                    <p>
                        <span className={styles.commentUsername}>
                            用户名称
                        </span>
                        <span className={styles.commentDate}>
                            回复
                        </span>
                        <span className={styles.commentUsername}>
                            用户名称
                        </span>
                    </p>
                    <p className={styles.commentDate}>日期</p>
                </div>
            </div>
            <p className={styles.commentContent}>
                评论内容
            </p>
            <div className={styles.button}>
                <Button>删除</Button>
                <Button>回复</Button>
                <Button>举报</Button>
            </div>
        </div>
    )
}

export {
    SearchBlock,
    RowBlock,
    ColumnBlock,
    ProfileBlock,
    RowSingle,
    ColumnSingle,
    CommentSingle
}