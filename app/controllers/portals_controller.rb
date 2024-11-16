class PortalsController < ApplicationController
  before_action :authenticate_user

  def index
    @students = Student.all
  end

  def create
    student = Student.new(student_params)
    if student.save
      redirect_to root_path
    else
      flash[:error] = 'Student not updated'
      redirect_to root_path
    end
  end

  def update
    student = Student.find_by_id(params[:id])
    if student.update(student_params)
      redirect_to root_path
    else
      flash[:error] = 'Student not updated'
      redirect_to root_path
    end
  end

  def destroy
    student = Student.find_by_id(params[:id])
    if student.destroy
      redirect_to root_path
    else
      flash[:error] = 'Student not updated'
      redirect_to root_path
    end
  end

  private

  def student_params
    params.permit(:name, :subject, :marks)
  end

  def authenticate_user
    user = User.find_by_id(session[:id]) 
    redirect_to new_session_path unless user
  end

end
