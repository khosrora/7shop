import abstractCouponHandler from './../abstractCouponHandler';
import ICoupon from './../../../../components/coupon/model/ICoupon';
import IUser from './../../../../components/users/model/IUser';




class ExpireHandler extends abstractCouponHandler {
    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        const now = new Date();

        if (now > coupon.expirest_at) {
            throw new Error("تاریخ انقضای کد تخفیف به پایان رسیده است");
        }
        return super.process(user, coupon);
    }
}

export default ExpireHandler;