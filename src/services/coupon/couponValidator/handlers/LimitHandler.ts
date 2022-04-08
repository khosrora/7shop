import abstractCouponHandler from './../abstractCouponHandler';
import IUser from './../../../../components/users/model/IUser';
import ICoupon from './../../../../components/coupon/model/ICoupon';




class LimitHandler extends abstractCouponHandler {

    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        if (coupon.used >= coupon.limit) {
            throw new Error("این کد تخفیف معتبر نیست");
        }
        return super.process(user, coupon);
    }

}

export default LimitHandler;