// Base imports
import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

// CSS imports
import './index.css'

// Foreign component imports

// Media imports
import theFarmImage from '../../Media/farmbackground.png'
import ResponsiveIcon from '../../Components/ResponsiveIcon'
import profilePicture from '../../Media/anathi_selfie-colorized.jpg'

// Number of skill boxes on each row for a desktop resolution.
const desktopSkillBoxesPerRow = 6

// Number of skill boxes on each row for a mobile resolution.
const mobileSkillBoxesPerRow = 3

// Size of margins around each skill box.
const skillBoxMargin = 4 /* px */

// Width of the skill box container at which the number of skill boxes per row
// changes.
const skillBoxesPerRowBreakpoint = 600 /* px */

class About extends Component {
  // In this format a constructor is required. Make sure you understand why...
  constructor(props) {
    super(props)

    // Reference to the skill box container element.
    this.skillBoxContainerRef = null

    // Called whenever the size of the window changes. This function checks
    // for changes in the width of `this.skillBoxContainerRef`.
    this.onWindowResized = () =>
      requestAnimationFrame(() => this.checkForSizeChangesToSkillBoxContainer())

    // Called whenever a sub-nav item is clicked.
    this.onSubNavItemClicked = selectedSubNavIndex =>
      this.setState({ visibleSubSectionIndex: selectedSubNavIndex })

    this.state = {
      // for controlling which section is visible
      currentAboutSection: 'skills',
      skillsClass: 'aboutSkills-skills',
      profileClass: 'aboutProfile-skills',
      interestsClass: 'aboutInterests-skills',

      // for indicating the current about section that ios visible
      skillsSelectorClass: 'subnav-item clickable highlighted',
      profileSelectorClass: 'subnav-item clickable',
      interestsSelectorClass: 'subnav-item clickable',

      // Width of the skill box container.
      skillBoxContainerWidth: null,

      // The Number of boxes in each row of the skill box container.
      skillBoxesPerRow: null,

      // Width and height of each skill box. Depends on
      // `skillBoxContainerWidth` and `skillBoxesPerRow`.
      skillBoxSize: null,

      // Skills to be turned into boxes.
      skills: [
        { name: 'HTML 5', level: 3, experience: '5 years' },
        { name: 'CSS 3', level: 3, experience: '5 years' },
        { name: 'XML', level: 3, experience: '5 years' },
        { name: 'Java', level: 2, experience: '4 years' },
        { name: 'iOS 11', level: 2, experience: '1 year' },
        { name: 'Swift 4', level: 2, experience: '1 year' },
        { name: 'Javascript', level: 3, experience: '5 years' },
        { name: 'React', level: 3, experience: '3 years' },
        { name: 'Node.js', level: 2, experience: '2 years' },
        { name: 'Docker', level: 2, experience: '4 years' },
        { name: 'Android', level: 2, experience: '2 years' },
        { name: 'Go', level: 1, experience: '1 year' },
        { name: 'Sketch', level: 3, experience: '1 years' },
        { name: 'Webpack', level: 2, experience: '3 years' },
        { name: 'Illustrator', level: 2, experience: '1 year' },
        { name: 'Photoshop', level: 1, experience: '1 year' },
        { name: 'jQuery', level: 1, experience: '1 year' },
        { name: 'Angular', level: 1, experience: '1 year' },
      ],

      // Sub-sections of this section.
      subSections: [
        {
          label: 'skills',
          renderer: () => this.renderSkillsSubSection(),
        },
        { label: 'profile', renderer: () => this.renderProfileSubSection() },
      ],

      // Index of the currently visible sub-section.
      visibleSubSectionIndex: 0,
    }
  }

  /**
   * Checks for dimensional changes to `this.skillBoxContainerRef`. If there
   * were any changes, state is updated accordingly.
   */
  checkForSizeChangesToSkillBoxContainer() {
    if (!this.skillBoxContainerRef) return

    const latestSkillBoxContainerWidth = this.skillBoxContainerRef.offsetWidth

    const isOnMobileDevice =
      latestSkillBoxContainerWidth <= skillBoxesPerRowBreakpoint
    const latestSkillBoxesPerRow = isOnMobileDevice
      ? mobileSkillBoxesPerRow
      : desktopSkillBoxesPerRow

    let shouldUpdateState = false
    let stateUpdates = {}

    // If the skill box container changed in size, kick off an update.
    if (latestSkillBoxContainerWidth != this.skillBoxContainerWidth) {
      shouldUpdateState = true
      stateUpdates = {
        ...stateUpdates,
        skillBoxContainerWidth: latestSkillBoxContainerWidth,
      }
    }

    // If the skill box container changed in size, kick off an update.
    if (latestSkillBoxesPerRow != this.skillBoxesPerRow) {
      shouldUpdateState = true
      stateUpdates = {
        ...stateUpdates,
        skillBoxesPerRow: latestSkillBoxesPerRow,
      }
    }

    if (shouldUpdateState) {
      this.setState(stateUpdates)
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResized)

    // Force state relating to element sizes to be initialized.
    this.checkForSizeChangesToSkillBoxContainer()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResized)
  }

  /** Calculates the ideal size for each skill box. */
  getSkillBoxSize(skillBoxContainerWidth, skillBoxesPerRow) {
    // Only continue if the inputs are valid (truthy).
    if (!skillBoxContainerWidth || !skillBoxesPerRow) {
      return null
    }

    const skillBoxOuterWidth = Math.floor(
      skillBoxContainerWidth / skillBoxesPerRow
    )
    const skillBoxInnerWidth = skillBoxOuterWidth - skillBoxMargin

    return skillBoxInnerWidth
  }

  /** Gets the color that maps to the given skill level. */
  getSkillLevelColor(skillLevel) {
    switch (skillLevel) {
      case 3:
        return 'rgb(34, 102, 204)' /* Blue */
      case 2:
        return 'rgb(58, 31, 180)' /* Purple */
      case 1:
        return '#6d23b3' /* Magenta */
      default:
        return '#222222' /* Gray */
    }
  }

  // Center view = translateX(-100%);
  scrollToProfile() {
    this.setState({ currentAboutSection: 'profile' })
    this.setState({ skillsClass: 'aboutSkills-profile' })
    this.setState({ profileClass: 'aboutProfile-profile' })
    this.setState({ interestsClass: 'aboutInterests-profile' })

    this.setState({ skillsSelectorClass: 'subnav-item clickable' })
    this.setState({ profileSelectorClass: 'subnav-item clickable highlighted' })
    this.setState({ interestsSelectorClass: 'subnav-item clickable' })
  }

  // Left-most view = translateX(none);
  scrollToSkills() {
    this.setState({ currentAboutSection: 'skills' })
    this.setState({ skillsClass: 'aboutSkills-skills' })
    this.setState({ profileClass: 'aboutProfile-skills' })
    this.setState({ interestsClass: 'aboutInterests-skills' })

    this.setState({ skillsSelectorClass: 'subnav-item clickable highlighted' })
    this.setState({ profileSelectorClass: 'subnav-item clickable' })
    this.setState({ interestsSelectorClass: 'subnav-item clickable' })
  }

  // Right-most view = translateX(-200%);
  scrollToInterests() {
    this.setState({ currentAboutSection: 'interests' })
    this.setState({ skillsClass: 'aboutSkills-interests' })
    this.setState({ profileClass: 'aboutProfile-interests' })
    this.setState({ interestsClass: 'aboutInterests-interests' })

    this.setState({ skillsSelectorClass: 'subnav-item clickable' })
    this.setState({ profileSelectorClass: 'subnav-item clickable' })
    this.setState({
      interestsSelectorClass: 'subnav-item clickable highlighted',
    })
  }

  translateContentOnClick(target) {
    if (target !== this.state.currentAboutSection && target === 'profile') {
      this.scrollToProfile()
    } else if (
      target !== this.state.currentAboutSection &&
      target === 'skills'
    ) {
      this.scrollToSkills()
    } else if (
      target !== this.state.currentAboutSection &&
      target === 'interests'
    ) {
      this.scrollToInterests()
    }
    console.log(this.state.currentAboutSection)
  }

  renderProfileSubSection() {
    // TODO(skeswa): fill this in with (better) content.
    return (
      <div className="profile-text">
        I was born in State College, PA to a South African family. My father and
        oldest brother were the two people in my life that inspired me to
        explore Computer Science. Even as a kid I had a passion for imaginative
        creation: from legos and blanket-forts to enormous minecraft structures
        and carpentry projects. Soon enough I built my very first web
        application with just HTML/CSS. It wasn't much, but it was clear to me
        then that I wanted to learn everything there was to web development and
        software.
      </div>
    )
  }

  renderSkillsSubSection() {
    const { skills, skillBoxContainerWidth, skillBoxesPerRow } = this.state

    const skillBoxSize = this.getSkillBoxSize(
      skillBoxContainerWidth,
      skillBoxesPerRow
    )
    const shouldShowSkillboxes = !!skillBoxSize
    const canCalculateProficiencyLegendWidth = skillBoxSize && skillBoxesPerRow
    const proficiencyLegendStyle = canCalculateProficiencyLegendWidth
      ? {
          maxWidth:
            // The size of all the skill boxes in one row (plus their margins)
            // minus the trailing margin of the last one.
            (skillBoxSize + skillBoxMargin) * skillBoxesPerRow - skillBoxMargin,
        }
      : null

    return (
      <div
        ref={el => (this.skillBoxContainerRef = el)}
        className="about-skills">
        <div className="proficiency-legend" style={proficiencyLegendStyle}>
          <div className="endpoint">ADVANCED</div>
          <div className="gradient" />
          <div className="endpoint">BEGINNER</div>
        </div>
        <div className="about-skillboxes">
          {shouldShowSkillboxes
            ? skills.map(skill => (
                <SkillBox key={skill.name} skill={skill} size={skillBoxSize} />
              ))
            : null}
        </div>
      </div>
    )
  }

  render() {
    const { welcomeText } = this.props
    const { subSections, visibleSubSectionIndex } = this.state

    const subSectionsStyle = {
      minWidth: `${subSections.length * 100}%`,
      transform: `translateX(${-100 *
        visibleSubSectionIndex /
        subSections.length}%)`,
    }

    return (
      <section className="about" id="about-div">
        <div className="title">About</div>
        <div className="subnav">
          {subSections.map(({ label }, index) => (
            <SubNavItem
              key={label}
              index={index}
              isHighlighted={index === visibleSubSectionIndex}
              label={label}
              onClick={this.onSubNavItemClicked}
            />
          ))}
        </div>

        <div className="content">
          <div className="about-subsections" style={subSectionsStyle}>
            {subSections.map(({ label, renderer }, index) => (
              <SubSection
                key={label}
                isVisible={index === visibleSubSectionIndex}
                renderer={renderer}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

class SubNavItem extends Component {
  constructor(props) {
    super(props)

    this.onClick = () => this.props.onClick(this.props.index)
  }

  render() {
    const { isHighlighted, label } = this.props

    return (
      <div
        className={
          isHighlighted
            ? 'subnav-item clickable highlighted'
            : 'subnav-item clickable'
        }
        onClick={this.onClick}>
        {label}
      </div>
    )
  }
}

const SkillBox = ({ skill, size }) => {
  const { experience, level, name } = skill

  const skillBoxSizeInPixels = `${size}px`
  const padding = Math.round(size / 6)
  const fontSize = Math.round(size / 8)
  const lineHeight = Math.round(1.5 * (size / 8))

  let levelColor = '#222222'
  switch (level) {
    case 3:
      levelColor = 'rgb(34, 102, 204)' /* Blue */
      break
    case 2:
      levelColor = 'rgb(58, 31, 180)' /* Purple */
      break
    case 1:
      levelColor = '#6d23b3' /* Magenta */
      break
    default:
      return '#222222' /* Gray */
  }

  const skillBoxStyle = {
    backgroundColor: levelColor,
    maxHeight: skillBoxSizeInPixels,
    maxWidth: skillBoxSizeInPixels,
    minHeight: skillBoxSizeInPixels,
    minWidth: skillBoxSizeInPixels,
    padding: `${padding}px`,
  }
  const skillBoxTextStyle = {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
  }

  return (
    <div key={name} className="skillbox" style={skillBoxStyle}>
      <div style={skillBoxTextStyle}>{name}</div>
      <div className="skillbox-experience" style={skillBoxTextStyle}>
        {experience}
      </div>
    </div>
  )
}

class SubSection extends Component {
  scrollToPortfolioOnClick() {
    scrollToComponent(document.getElementById('portfolio-div'), {
      offset: 0,
      align: 'top',
      duration: 750,
    })
  }

  render() {
    const { isVisible, renderer } = this.props

    return (
      <div
        className={isVisible ? 'about-subsection visible' : 'about-subsection'}>
        {renderer()}

        <div
          className="scroll-to-portfolio clickable"
          onClick={this.scrollToPortfolioOnClick.bind(this)}>
          <div>SEE MY WORK</div>
        </div>
      </div>
    )
  }
}

export default About
