import abstractCouponHandler from './../abstractCouponHandler';
import ICoupon from './../../../../components/coupon/model/ICoupon';
import IUser from './../../../../components/users/model/IUser';




class UserHandler extends abstractCouponHandler {

    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        const { userConstraint } = coupon.constraints;
        if (user.id !== userConstraint.id) {
            throw new Error("این کد تخفیف برای کاربری شما معتبر نیست");
        }
        return super.process(user, coupon);
    }
}

export default UserHandler;