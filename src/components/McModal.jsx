import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function McModal() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button onClick={toggleModal}>Toggle modal</Button>
      <Modal show={showModal} size='md' popup={true} onClose={toggleModal}>
        <form>
          <Modal.Header />
          <Modal.Body>
            <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Sign in to our platform
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='text' value='Name' />
                </div>
                <TextInput id='name' placeholder='Item Name' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='text' value='Name' />
                </div>
                <TextInput id='name' placeholder='Item Name' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='text' value='Name' />
                </div>
                <TextInput id='name' placeholder='Item Name' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='text' value='Name' />
                </div>
                <TextInput id='name' placeholder='Item Name' required={true} />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='text' value='Name' />
                </div>
                <TextInput id='name' placeholder='Item Name' required={true} />
              </div>
              <div className='w-full'>
                <Button>Log in to your account</Button>
              </div>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}

export default McModal;
