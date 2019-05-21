import {isTrue} from "@utils/validator";

/**
 * 计算课程的价格总和
 * @param courseList 课程列表
 * @returns {number}
 */
export const countShoppingCartTotalPrice = (courseList): number => {
  let total = 0.0;
  for (let item of courseList) {
    total += getCoursePrice(item.course);
  }
  return total;
};


/**
 * 计算课程的价格总和
 * @param courseList 课程列表
 * @returns {number}
 */
export const countCourseListTotalPrice = (courseList): number => {
  let total = 0.0;
  for (let item of courseList) {
    total += getCoursePrice(item);
  }
  return total;
};


/**
 * 计算课程的价格总和
 * @param courseList 课程列表
 * @returns {number}
 */
export const countOrderTotalPrice = (orderList): number => {
  let total = 0.0;
  for (let item of orderList) {
    total += item.price
  }
  return total;
};


export const getCoursePrice = (course): number => {
  if (isTrue(course.isFree)) {
    return 0.0;
  } else if (isTrue(course.isDiscount)) {
    return parseFloat(course.discountPrice);
  } else {
    return parseFloat(course.coursePrice);
  }
};
