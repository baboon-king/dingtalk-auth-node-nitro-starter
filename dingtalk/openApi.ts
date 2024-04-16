export interface Response<T = unknown> {
  errcode: number;
  result: T;
  errmsg: string;
  request_id: string;
}

export interface GetUserIdOutputResult {
  associated_unionid: string;
  unionid: string;
  device_id: string;
  sys_level: number;
  name: string;
  sys: boolean;
  userid: string;
}

export interface UserGetOutputResult {
  /**
   * "{'爱好':'旅游','年龄':'24'}"
   */
  extension: string;
  /**
   * "z21HjQliSzpw0YWxxxxx"
   */
  unionid: string;
  /**
   * "true"
   */
  boss: string;
  role_list: {
    /**
     * "职务"
     */
    group_name: string;
    /**
     * "总监"
     */
    name: string;
    /**
     * "100"
     */
    id: string;
  };
  exclusive_account: false;
  /**
   * "manager240"
   */
  manager_userid: string;
  /**
   * "true"
   */
  admin: string;
  /**
   * "备注备注"
   */
  remark: string;
  /**
   * "技术总监"
   */
  title: string;
  /**
   * "1597573616828"
   */
  hired_date: string;
  /**
   * "zhangsan"
   */
  userid: string;
  /**
   * "未来park"
   */
  work_place: string;
  dept_order_list: {
    /**
     * "2"
     */
    dept_id: string;
    /**
     * "1"
     */
    order: string;
  };
  /**
   * "true"
   */
  real_authed: string;
  /**
   * "[2,3,4]"
   */
  dept_id_list: string;
  /**
   * "4"
   */
  job_number: string;
  /**
   * "test@xxx.com"
   */
  email: string;
  leader_in_dept: {
    /**
     * "true"
     */
    leader: string;
    /**
     * "2"
     */
    dept_id: string;
  };
  /**
   * "18513027676"
   */
  mobile: string;
  /**
   * "true"
   */
  active: string;
  /**
   * "test@xxx.com"
   */
  org_email: string;
  /**
   * "010-86123456-2345"
   */
  telephone: string;
  /**
   * "xxx"
   */
  avatar: string;
  /**
   * "false"
   */
  hide_mobile: string;
  /**
   * "true"
   */
  senior: string;
  /**
   * "张三"
   */
  name: string;
  union_emp_ext: {
    union_emp_map_list: {
      /**
       * "5000"
       */
      userid: string;
      /**
       * "dingxxx"
       */
      corp_id: string;
    };
    /**
     * "500"
     */
    userid: string;
    /**
     * "dingxxx"
     */
    corp_id: string;
  };
  /**
   * "86"
   */
  state_code: string;
}
