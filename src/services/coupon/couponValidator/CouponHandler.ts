import ICoupon from '../../../components/coupon/model/ICoupon';
import IUser from './../../../components/users/model/IUser';



interface CouponHandler {
    setNext(handler: CouponHandler): CouponHandler;
    process(user : IUser ,coupon: ICoupon): ICoupon | null;
}
export default CouponHandler;