/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState, SetStateAction, Dispatch } from 'react';
import { Modal } from 'flowbite-react';
// @ts-ignore
import ReactStars from 'react-rating-stars-component';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { toast } from 'react-toastify';

const ReviewModal: FC<{
    setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
    const [rating, setRating] = useState(1);
    const [showFinal, setShowFinal] = useState(false);
    const handleSubmit = () => {
        if (rating === 5) {
            window.open('https://www.amazon.com');
        } else {
            toast.success('Thank you for your feedback');
            setShowModal(false);
            setShowFinal(false);
        }
    };

    return showFinal ? (
        <>
            <Modal.Header>
                Thank you for reviewing our{' '}
                <span className="uppercase font-bold  "> Golf Portable Bluetooth Speaker</span>!
            </Modal.Header>

            <Modal.Body>
                <div className="space-y-4">
                    <p className="text-base text-center leading-relaxed text-gray-700 dark:text-gray-400">
                        Your honest feedback - be it a 5-star or 1-star is extremely valuable to our
                        customers and development team.
                    </p>
                    <p className="text-base text-center leading-relaxed text-gray-700 dark:text-gray-400">
                        Our team will now send you your{' '}
                        <span className="uppercase font-bold  "> Golf brush for cleaning</span> Golf
                        brush for cleaning and you should recieve it in the mentioned time frame.
                    </p>
                </div>
                <h1 className="text-2xl font-semibold text-center my-5">
                    You have rated the product with
                </h1>
                <div className="flex justify-center">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <AiFillStar
                                key={_}
                                className={rating >= i + 1 ? 'text-[#ffd700]' : 'text-gray-400'}
                                size={36}
                            />
                        ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className=" w-full bg-gray-800 text-white h-10 font-medium"
                    type="button"
                    onClick={() => handleSubmit()}
                >
                    OK
                </button>
            </Modal.Footer>
        </>
    ) : (
        <>
            <Modal.Header>How would you rate Golf Portable Bluetooth Speaker</Modal.Header>
            <Modal.Body>
                <div
                    className="w-full flex flex-col items-center"
                    style={{
                        transform: 'scale(2.5)',
                    }}
                >
                    <ReactStars
                        count={5}
                        onChange={(value: number) => setRating(value)}
                        activeColor="#ffd700"
                        emptyIcon={<AiOutlineStar />}
                        filledIcon={<AiFillStar />}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="feedback">Please leave your feedback : </label>
                    <textarea
                        name="feedback"
                        id="feedback"
                        className="w-full h-24 px-4 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="Your feedback"
                        rows={2}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className=" w-full bg-gray-800 text-white h-10 font-medium"
                    type="button"
                    onClick={() => setShowFinal(true)}
                >
                    Submit
                </button>
            </Modal.Footer>
        </>
    );
};

export default ReviewModal;
