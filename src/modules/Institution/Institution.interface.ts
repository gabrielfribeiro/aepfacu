export interface IInstitutionList {
  course_name: string
  student_list: IStudent[]
}

export interface IInstitutionNameList {
  course_name: string
}

export interface IStudent {
  course: string
  scholarship: string
  start_course: string
  end_course: string
  student: string
  ra: string
}

export interface IColumn {
  ra: string
  name: string
  scholarship: string
  start_course: string
  end_course: string
  options: string
}
