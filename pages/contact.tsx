import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ApiState } from '../api/api.interface';
import useFormError from '../common/hooks/useFormError';
import { RootState, store } from '../store';
import commonThunk from '../store/api/thunk';
export interface ContactProps {}
interface ContactForm {
    firstName: string;
    lassName: string;
    email: string;
    phone: string;
    message: string;
}

const defaultValues: ContactForm = {
    email: '',
    message: '',
    phone: '',
    firstName: '',
    lassName: '',
};

const Contact: React.FunctionComponent<ContactProps> = () => {
    const { register, handleSubmit, reset } = useForm<ContactForm>({ defaultValues });
    const apiState = useSelector<RootState, ApiState>((state) => state.api);
    const errors = useFormError<ContactForm>(defaultValues);
    const handleOnSubmit = (data: ContactForm) => {
        store.dispatch(
            commonThunk.sendSupport({ email: data.email, fullName: data.firstName + data.lassName, message: data.message, phone: '0909999999' }),
        );
    };

    React.useEffect(() => {
        if (apiState.message) {
            reset(defaultValues);
        }
    }, [apiState.message]);
    return (
        <div className="flex flex-col items-center justify-center flex-1 py-28 bg-sisal-500">
            <div className="flex flex-col items-center w-full px-2 md:w-112.5">
                <div className="flex items-center mb-8 space-x-1 text-3xl font-bold">
                    <div className="w-4 h-4 bg-blue-600"></div>
                    <h1>Let's Talk</h1>
                </div>
                <div onSubmit={handleSubmit(handleOnSubmit)} className="w-full px-2 py-8 bg-white rounded-sm shadow-lg md:px-4">
                    <form className="space-y-4">
                        <div className="space-y-4 md:space-x-8 md:flex md:space-y-0 md:justify-between">
                            <div className="md:flex-1">
                                <label className="block">
                                    First Name <span className="font-bold text-blue-600">*</span>
                                </label>
                                <input
                                    {...register('firstName')}
                                    className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600"
                                />
                            </div>
                            <div className="md:flex-1">
                                <label className="block">
                                    Last Name <span className="font-bold text-blue-600">*</span>
                                </label>
                                <input
                                    {...register('lassName')}
                                    className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600"
                                />
                            </div>
                        </div>
                        <div className="">
                            <label className="block">
                                Email <span className="font-bold text-blue-600">*</span>
                            </label>
                            <input {...register('email')} className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600" />
                            {Boolean(errors.email.length) && <p className="text-red-500 ">Email {errors.email}</p>}
                        </div>
                        <div className="">
                            <label className="block">
                                Subject <span className="font-bold text-blue-600">*</span>
                            </label>
                            <input className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600" />
                        </div>
                        <div className="">
                            <label className="block">
                                Message <span className="font-bold text-blue-600">*</span>
                            </label>
                            <textarea
                                {...register('message')}
                                className="block w-full duration-300 border-b-2 border-gray-300 focus:border-blue-600"
                            ></textarea>
                            {Boolean(errors.message.length) && <p className="text-red-500 fade-in">Message {errors.message}</p>}
                        </div>
                        <div className="text-center md:text-left">
                            <button className="inline-block px-16 py-2 font-semibold text-white bg-blue-600 rounded-3xl">Send</button>
                        </div>
                        <p className="text-center opacity-60">Thank for submitting!</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
