const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { createProject } = require('../database/models/Project')
const {
  getProjects,
  getProjectsDetails
} = require('../database/models/Project')

const getProjectsController = catchAsync(async (req, res) => {
  const data = await getProjects()
  if (data) {
    res.status(200).json({
      message: 'all projects retrieved successfully.',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no projects found',
      data: ''
    })
  }
})

const showProjectsData = catchAsync(async (req, res) => {
  const data = await getProjectsDetails()
  if (data) {
    res.status(200).json({
      message: 'projects retrieved successfully',
      data: data
    })
  } else {
    res.status(200).json({
      message: 'no projects found',
      data: ''
    })
  }
})
const addingProject = catchAsync(async (req, res) => {
  const addedData = await createProject(
    req.body.ProjectName,
    req.body.StartDate,
    req.body.PiNumber
  )
  if (addedData) {
    res.status(200).json({
      message: 'create project is done successfully',
      data: addedData
    })
  } else {
    res.status(200).json({
      message: 'Adding project is failed'
    })
  }
})
module.exports = {
  getProjectsController,
  addingProject,
  showProjectsData
}
