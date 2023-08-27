import React from 'react';
import { Button } from './ui';
import Avatar from './ui/avatar';

type UploadPicType = {
    onProfilePicChange: React.ChangeEventHandler<HTMLInputElement>;
    avatarFile: File | null;
    resetProfileImage: () => void;
}

const UploadPic = (props: UploadPicType) => {
    return (
        <div className='flex items-center'>
            <Avatar src={props.avatarFile ? URL.createObjectURL(props.avatarFile) : ""} showBadge={false} className='w-16 h-16' />
            <Button className='mx-4' size="sm">
                <label htmlFor="picture">Upload new picture</label>
                <input id='picture' type='file' className='hidden' accept='image/png, image/gif, image/jpeg' onChange={props.onProfilePicChange} />
            </Button>
            <Button variant="secondary" size="sm" onClick={props.resetProfileImage}>Delete</Button>
        </div>
    );
};

export default UploadPic;
